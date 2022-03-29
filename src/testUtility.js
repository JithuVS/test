export const findBy = (wrapper, value) => {
    return wrapper.find(`[data-test='${value}']`);
}