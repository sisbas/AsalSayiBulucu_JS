/**
 * Created by SEMİH on 2.05.2017.
 */
var asalDizi = [];
var maks = Math.pow(2, 53) - 1;

for (var i = 2; i < maks; i++) {
    var gecici = [];
    for (var j = 2; j <= i; j++) {
        if (gecici.length > 1) {
            break;
        } else {
            if (i % j == 0) {
                gecici.push(j);
            }
            if ((gecici.length == 1) && (i / j == 1)) {
                asalDizi.push(i);
            }
        }
    }
}