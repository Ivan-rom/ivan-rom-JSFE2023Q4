class Loader {
    readonly baseLink: string;
    readonly options: { apiKey: string };

    constructor(baseLink: string, options: { apiKey: string }) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<ArgType>(
        { endpoint, options = {} }: { endpoint: 'sources' | 'everything'; options?: {} },
        callback = (data: ArgType): void => {
            console.error('No callback for GET response');
        }
    ) {
        this.load<ArgType>('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: { [prop: string]: string }, endpoint: string) {
        const urlOptions: { [prop: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<ArgType>(
        method: string,
        endpoint: string,
        callback: (data: ArgType) => void,
        options: { [prop: string]: string } = {}
    ) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
