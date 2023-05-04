const server = http.createServer(function(req,res){
    const path = req.url;
    const method = req.method;
    if(path === "/products"){
        if(method === "GET"){
            req.writeHead(200, {"Content-Type" : "application/json"});
            const products = JSON.stringify([
                {
                    name : "농구공",
                    price: 5000,
                },
            ]);

            res.end(products);
        }else if(method === "POST"){
            res.end("생성되었습니다!");
        }
    }
    res.end("Good Bye");
});