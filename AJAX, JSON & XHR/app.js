const customerButton = document.getElementById('btn1');
const customersButton = document.getElementById('btn2');

//Customer EventListener
customerButton.addEventListener('click', loadCustomer);
//Customers EventListner
customersButton.addEventListener('click', loadCustomers);


//Function Load Customer
function loadCustomer(e){
    //create a new XHR Object
    const xhr = new XMLHttpRequest();

    //Make a request to the local file cusomter.json. Should work with an external URL /API
    xhr.open('GET', 'customer.json', true);

    xhr.onload = function(){
        //check if http request status is 'OK'
        if(this.status === 200){
            const customerDetail = JSON.parse(this.responseText);
            

            const output = `
            <ul>
             <li> ID: ${customerDetail.id}</li>
             <li> Name: ${customerDetail.name}</li>
             <li> Company: ${customerDetail.company}</li>
             <li> Phone: ${customerDetail.phone}</li>
            </ul>
            `

            //selecting the customer id from index.html file
            const customer = document.querySelector('#customer');

            //appending the customer data to be displayed as html output
            customer.innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault();
}


//Function Load Customers
function loadCustomers(e){
    //create a new XHR Object
    const xhr = new XMLHttpRequest();

    //Make a request to the local file cusomter.json. Should work with an external URL /API
    xhr.open('GET', 'customers.json', true);

    xhr.onload = function(){
        //check if http request status is 'OK'
        if(this.status === 200){
            const customersDetail = JSON.parse(this.responseText);
            let output = "";
            customersDetail.forEach(customer => {
            output += `
            <ul>
             <li> ID: ${customer.id}</li>
             <li> Name: ${customer.name}</li>
             <li> Role: ${customer.role}</li>
             <li> Year: ${customer.year}</li>
            </ul>
            `;
        });
        
        //selecting the customers id from index.html file
        const customers = document.querySelector("#customers");


        //appending All the customer's data to be displayed as html output
        customers.innerHTML = output;
    }
}

    xhr.send();

    e.preventDefault();
}
