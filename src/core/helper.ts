export default {
  convertListToJson(string:string) {
    return string.split('\n')
      .map((line) => {
        const [id, ...names] = line.split(' ');

        return {
          id,
          name: names.join(' '),
        };
      });
  },
  debounce(fn: () => void, delay:number) {
    let timeoutID: any = null;
    const delayed = (...args: any) => {
      clearTimeout(timeoutID);
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const self: any = this;
      timeoutID = setTimeout(() => {
        fn.apply(self, args);
      }, delay);
    };

    return delayed();
  },

};
