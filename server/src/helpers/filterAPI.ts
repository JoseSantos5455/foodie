import category from "@/components/categories/category";
import { ErrorHandler } from "@/middlewares/error.middleware";

class APIFilters {
    query: any;
    queryString: {[key:string]: string};
    constructor(query, queryString) {
        this.query = query
        this.queryString = queryString
    }

    async filtreing() {
        const queryobj = {...this.queryString}
        if(queryobj.category){
            const categoryExists = await category.findOne({slug: queryobj.category})
            if(categoryExists) queryobj.category = categoryExists._id
            else throw new ErrorHandler(404, 'category not found')
        }
        const excludedfields = ['page', 'sort', 'limit']
        excludedfields.forEach(el => delete queryobj[el])
        let querystr = JSON.stringify(queryobj)
        querystr = querystr.replace(/\b(gte|gt|lt|lte)\b/g, match => `$${match}`)
       
        this.query.find(JSON.parse(querystr))
        return this
    }
}

export default APIFilters