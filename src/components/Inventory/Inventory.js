import React from 'react';

const Inventory = () => {

    const handleAddInventory = () =>{
        // const product = fakeData[0];
        //     console.log('before post', fakeData.length);
        //     fetch('http://localhost:4200/addProduct', {
        //         method: 'POST',
        //         headers: {
        //         'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(fakeData) 
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log('post successful', data);
        //     })
            
    }

    return (

        <div>
            <h1>Add Inventory to sell more...</h1>
            <button onClick={handleAddInventory}>Add Inventory</button>
        </div>
    );
};

export default Inventory;