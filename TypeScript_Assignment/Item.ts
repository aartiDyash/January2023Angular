class Item{

    public itemid:Number;
    public itemname:String;
    public iteitemprice:Number;
    public category:String;

    constructor(itemid:Number,itemname:String,iteitemprice:Number,category:String){
        this.itemid=itemid;
        this.itemname=itemname;
        this.iteitemprice=iteitemprice;
        this.category=category;
    }

    display = () => console.log(this.itemid+'------' + this.itemname+'----'+this.iteitemprice+'------'+this.category)
    
}
let item =new Item(1,"colgate",10,"toothpaste");
let item2 =new Item(2,"sensodyne",20,"toothpaste");
item.display();
item2.display();
