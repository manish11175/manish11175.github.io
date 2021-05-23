



function Customer(name ,course,author){
    this.name=name;
    this.course=course;
    this.author=author;
    
}

const submitForm=document.getElementById("customer-form").addEventListener('submit',(e)=>{
    
    e.preventDefault();
    const newData=Array.from(FormData.entries());
    console.log(newData);
    const customer=new Customer(name.value,course.vale,author.value);


})