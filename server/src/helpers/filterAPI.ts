class APIFilters {
    query: any;
    queryString: {string};
    constructor(query, queryString) {
        this.query = query
        this.queryString = queryString
    }

    filtreing() {
        const queryobj = {...this.queryString}
        const excludedfields = ['page', 'sort', 'limit']
        excludedfields.forEach(el => delete queryobj[el])
        let querystr = JSON.stringify(queryobj)
        querystr = querystr.replace(/\b(gte|gt|lt|lte)\b/g, match => `$${match}`)
        this.query.find(JSON.parse(querystr))
        return this
    }
}

export default APIFilters