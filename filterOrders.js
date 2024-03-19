function filledOrders(orders, k) {
    orders.sort((a, b) => a - b);
    
    let fulfilledOrders = 0;
    for (let orderItem of orders) { 
        if (k >= orderItem) {
            k -= orderItem;
            fulfilledOrders++;
        } else {
            break;
        }
    }
    
    return fulfilledOrders;
}
