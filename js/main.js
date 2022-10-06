const NEGOCIOS = [
    {
    id: 0,
    negocio: "Movil",
    pcrc:"Black",
    estado: false,
    icon:"./assets/icon/icon-movil.svg",
    color:"#50a9e9",
    modif:""
    },
    {
    id: 1,    
    negocio: "Movil",
    pcrc:"Onboarding",
    estado: false,
    icon:"./assets/icon/icon-movil.svg",
    color:"#50a9e9",
    modif:""
    },
    {
    id: 2,
    negocio: "Movil",
    pcrc:"Abonos",
    estado: false,
    icon:"./assets/icon/icon-movil.svg",
    color:"#50a9e9",
    modif:""
    },
    {
    id: 3,    
    negocio: "Movil",
    pcrc:"Prepago",
    estado: false,
    icon:"./assets/icon/icon-movil.svg",
    color:"#50a9e9",
    modif:""
    },
    {
    id: 4,
    negocio: "Cable",
    pcrc:"Customer",
    estado: false,
    icon:"./assets/icon/care-cable.svg",
    color:"#e95050",
    modif:""
    },
    {
    id: 5,
    negocio: "Cable",
    pcrc:"Soporte",
    estado: false,
    icon:"./assets/icon/sop.svg",
    color:"#e95050",
    modif:""
    },
    {
    id: 6,
    negocio: "Cable",
    pcrc:"Uruguay",
    estado: false,
    icon:"./assets/icon/sop.svg",
    color:"#e95050",
    modif:""
    },
    {
    id: 7,
    negocio: "Fija",
    pcrc:"Customer",
    estado: false,
    icon:"./assets/icon/care-fija.svg",
    color:"#e9d750",
    modif:""
    },
    {
    id: 8,
    negocio: "Fija",
    pcrc:"Soporte",
    estado: false,
    icon:"./assets/icon/sop.svg",
    color:"#e9d750",
    modif:""
    }
];

const nav = document.querySelector('.nav');
const btnNav = document.querySelector('#btn-nav');
const dashboard = document.querySelector('.dashboard');

btnNav.addEventListener('click', () => {
    nav.classList.toggle('nav-off');
});

//Render Widgets
const renderWidgets = () => {
    for( pcrc of NEGOCIOS){
        dashboard.innerHTML += `
            <div class="widget ${pcrc.negocio}" id="${pcrc.id}">
                <div class="widget__span" style="border-right: 10px solid ${pcrc.color};">
                    <h4>${pcrc.negocio}</h3>
                </div>
                <div class="widget__title">
                    <img src="${pcrc.icon}" alt="" class="widget__icon"><h2>${pcrc.pcrc}</h2>
                </div>
                <div class="widget__status">
                    <p>Estato: ${(pcrc.estado) ? "Activado":"Desactivado"} </p> 
                </div>
                <button class="widget__btn">Activar</button>
                <div class="widget__data">
                    <p>Ultima modificación: ${(pcrc.modif === "") ? "sin registros en fecha." : pcrc.modif ` por user.`} </p>
                </div>
            </div>
        `;
    };
};
renderWidgets();

let widgets = document.querySelectorAll('.widget'); 

nav.addEventListener('click', elem => {
    if(elem.target.classList.contains('negocio') || elem.target.parentElement.classList.contains('negocio')){
        document.querySelectorAll('.widget').forEach(e => {
            if (!e.classList.contains(elem.target.firstChild.textContent)) { 
                e.classList.add('oculto');
            } else {
                e.classList.remove('oculto');
            }
        });
    } else if(elem.target.classList.contains('ot') || elem.target.parentElement.classList.contains('ot')){
        document.querySelectorAll('.widget').forEach(e => {
            if (e.classList.contains('oculto')) { 
                e.classList.remove('oculto');
            }
        });
    };
});

dashboard.addEventListener('click', e => {
    if(e.target.classList.contains("widget__btn")){
        let indexObj = e.target.parentElement.getAttribute('id'); //registro de id para detectar index en OBJ
        btnStatusHandler(e.target, indexObj);
        updateMsj(e,indexObj); //modif msj MODIF
        localStorage.setItem('PCRCs-DATA',JSON.stringify(NEGOCIOS)) //guarda data/obj en LS
    }
});

const btnStatusHandler = (evt, ix) => {
    //modif BTN
    if(evt.classList.contains("widget__btn--on")){
        evt.classList.remove("widget__btn--on")
        evt.textContent = "Activar";
        NEGOCIOS[ix].estado = false; //modif eestado de obj/target
        //modif msj ESTADO
        const status = evt.parentElement.querySelector('.widget__status');
        status.firstElementChild.textContent = 'Estado: Desactivado';
    } else {
        evt.classList.add("widget__btn--on")
        evt.textContent = "Desactivar";
        NEGOCIOS[ix].estado = true; //modif eestado de obj/target
        //modif msj ESTADO
        const status = evt.parentElement.querySelector('.widget__status');
        status.firstElementChild.textContent = 'Estado: Activo';
    }
};

const updateMsj = (evt, ix) => {
    const dataModif = new Date()
    NEGOCIOS[ix].modif = dataModif.toUTCString(); //guarda data en obj
    //actualiza card
    const modif = evt.target.parentElement.querySelector('.widget__data');
    modif.firstElementChild.textContent = `Ultima modificación: ${dataModif} por user.`;
}

