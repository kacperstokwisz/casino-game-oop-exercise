class Wallet {
    constructor(money){
        let _money = money;
        //pobieranie aktualnej zawartości portfela
        this.getWalletBalance = function(){
            return _money
        }

        //sprawdznie czy użytkownik ma odpowiednią ilość środków
        this.checkCanPlay = function(value){
            if(_money >= value){
                return true;
            } else {
                return false;
            }
        }

        //zmiana salda portfela
        this.changeWalletBalance = function(value, type = "+"){
            if(typeof value === "number" && !isNaN(value)){
                if(type === "+"){
                    return _money += value;
                } else if (type === "-"){
                    return _money -= value;
                } else {
                    throw new Error('Nieprawidłowy typ działania')
                }
            } else {
                throw new Error('nieprawidłowa liczba')
            }
        }
    }
}