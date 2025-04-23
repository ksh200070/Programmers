function solution(chicken) {
    let service = 0;
    let coupons = chicken;

    while (coupons >= 10) {
        const newService = Math.floor(coupons / 10);
        service += newService;
        coupons = newService + (coupons % 10);
    }

    return service;
}