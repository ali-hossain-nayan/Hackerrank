function mostActive(customers) {
    const totalTrades = customers.length;
    const threshold = 0.05 * totalTrades; 
    
    const tradeCounts = {};
    for (let customer of customers) {
        tradeCounts[customer] = (tradeCounts[customer] || 0) + 1;
    }
    
    const activeCustomers = Object.keys(tradeCounts).filter(customer => tradeCounts[customer] >= threshold);
    
    activeCustomers.sort();
    
    return activeCustomers;
}
