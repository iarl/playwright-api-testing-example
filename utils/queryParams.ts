export const getQuery = (params: object) => {
    let queryParams = "?";
    Object.keys(params).forEach((key, i, arr) => {
        const divider = i === arr.length - 1 ? "" : "&";
        queryParams = queryParams.concat(`${key}=${params[key]}${divider}`);
    });
    return queryParams;
};