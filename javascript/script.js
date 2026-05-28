
const elements = document.querySelectorAll('.animation');

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        } else {

            entry.target.classList.remove('show');

        }

    });

});

elements.forEach((el)=>{
    observer.observe(el);
});

const questions = document.querySelectorAll(".ques");

questions.forEach((q) => {
    q.addEventListener("click", () => {
        
        questions.forEach(item => {
            if (item !== q) item.classList.remove("open");
        });

        q.classList.toggle("open");
    });
});

const menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobileMenu");

menu.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});

const rows = document.querySelectorAll(".hidden-row");

const rowObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show-row");

        }else{

            entry.target.classList.remove("show-row");

        }

    });
},{
    threshold: 0.2
});

rows.forEach((row,index)=>{

    row.style.transitionDelay = `${index * 0.2}s`;

    rowObserver.observe(row);

});
