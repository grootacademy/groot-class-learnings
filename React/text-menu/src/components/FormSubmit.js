import React from 'react'

function FormSubmit() {

    function handleSub(e) {
        e.preventDefault()
        console.log(e)


    }
    return (
        <div>

            <form action="" onSubmit={handleSub}>
                <input type="text" name='name' />
                <input type="text" name='email' />
                <button type='submit'> Submit</button>
            </form>
        </div>
    )
}

export default FormSubmit