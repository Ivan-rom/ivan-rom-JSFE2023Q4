class Emitter<
  T extends (args?: (string | number)[]) => never = (
    args?: (string | number)[],
  ) => never,
> {
  events: {
    [key: string]: T[];
  };

  constructor() {
    this.events = {};
  }

  subscribe(
    eventName: string,
    callback: (args?: (string | number)[]) => never,
  ) {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(callback as T);
  }

  unsubscribe(
    eventName: string,
    callback: (args?: (string | number)[]) => never,
  ) {
    this.events[eventName] = this.events[eventName].filter(
      (eventCallback) => callback !== eventCallback,
    );
  }

  emit(eventName: string, args: (string | number)[]) {
    const event = this.events[eventName];
    if (event) event.forEach((callback) => callback.call(null, args));
  }
}

export default new Emitter();
