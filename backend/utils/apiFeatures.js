class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    //Removing fields for category
    const removeFields = ["keyword", "page", "limit"];
    removeFields.forEach((key) => delete queryCopy[key]);

    //Filter for Price and Rating
    

    let queryStr = JSON.stringify(queryCopy); //to convert object to string
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    // /\b() is for regular expression
    this.query = this.query.find(JSON.parse(queryStr));

    //this.query is nothing but Product.find()
    // this.query = this.query.find(queryCopy);
    return this;
  }
  pagination(resultPerPage){
      const currentPage = Number(this.queryStr.page) || 1; 
      // Skip results per page . Ex- for showing 50 products on 5 pages ,
      // we have to show first 10 on first page and then
      // for second page we will show products from 11-20 
      // i.e we will skip first 10 products for second page 
      // then first 20 products for the third page and so on...

      const skip = resultPerPage * (currentPage -1);
      this.query = this.query.limit(resultPerPage).skip(skip);
      return this;

  }
}

module.exports = ApiFeatures;
