function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = "no";
}
//FIller books
const tokillamockingbird = new Book("To Kill a Mockingbird", "Harper Lee", 281 );
const theshining = new Book("The Shining", "Stephen King", 447);
const chainsawman = new Book("Chainsaw Man", "Tatsuki Fujimoto", 1400);
let myLibrary =[];
myLibrary.push(tokillamockingbird, theshining, chainsawman);
for(const books of myLibrary){
    addBook(books);
}  
function addBook(books){
   if(document.getElementsByClassName(books.title).length==0 && books.title.length != 0) 
    {
        var libentry = document.createElement('div');
        libentry.className = books.title;
        document.getElementById('bookshelf').appendChild(libentry);
        let i = 0;
        for(var key in books){
        var entry = document.createElement('p');
            entry.className = +i +books.title;
            i++;
            entry.textContent += key + ": "+ books[key];
            console.log((books.title)[0]);
            document.getElementsByClassName(books.title)[0].appendChild(entry);
        }
    let toggle = document.createElement('button');
    toggle.addEventListener('click', event => {
        console.log(event.target.id);
        let p = document.getElementsByClassName(event.target.id);
        console.log(p[0].innerHTML);
        if(p[0].innerHTML == "read: no"){
            console.log("if");
            document.getElementsByClassName(event.target.id)[0].innerHTML = "read: yes";
            console.log(document.getElementsByClassName(event.target.id)[0].innerHTML);

        }
        else{
            console.log("else");
            document.getElementsByClassName(event.target.id)[0].innerHTML = "read: no";
        }
        document
    })
    toggle.id = 3+libentry.className;
    toggle.textContent = 'read/unread';
    let del = document.createElement('button');
    del.className = 'remove';
    del.textContent = 'delete';
    del.type = 'button';
    del.addEventListener('click', function(e) {
        e.currentTarget.parentNode.remove();
    });
    document.getElementsByClassName(libentry.className)[0].appendChild(toggle);  
    document.getElementsByClassName(libentry.className)[0].appendChild(del);  
    }
};
const form = document.querySelector('#form');
form.addEventListener('submit', function addNewBook(){
    event.preventDefault();
    var title = document.getElementById('title');
    var author = document.getElementById('author');
    var pagenum = document.getElementById('pages');
    var read = document.getElementById('yes');
    let newbook = (new Book(title.value, author.value, pagenum.value ));
    if(read.checked)
    newbook.read = "yes";
    else newbook.read = "no";
    myLibrary.push(newbook);
    addBook(newbook);
    resetForm();
});


function resetForm(){
    form.reset();
}



