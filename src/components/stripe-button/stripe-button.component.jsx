import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100
    const publishableKey='pk_test_51Hf3u1CNN8O8hZYTDS51wqInHRUtZfOG0vNy6OW4Y1wGUIdKnBFa4bxg6Uf4Ae2IW4AhDHX4X6G6zu0ekeodvkl100l02vznl3'

    const onToken=token=>{
        console.log(token);
        alert('Payment Successful')
    }


    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton