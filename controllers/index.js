var items =[
    {id: 1, name: 'product1'},
    {id: 2, name: 'product2'},
    {id: 3, name: 'product3'}
];

var index = (req, res) =>{
    res.render('index', {
        title: 'My web store'
    });
}

var listOfProducts = (req, res, next) =>{
    res.render('products', {
        title: 'List of Products',
        items: items
    });
}

var addProducts = (req, res, next) =>{
    var { newItem } = req.body;
    items.push({
        id: items.length + 1,
        name: newItem
    });
    res.redirect('/products');
    console.log(req.body);
}

module.exports = {
    index,
    listOfProducts,
    addProducts
}