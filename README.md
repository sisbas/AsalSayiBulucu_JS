# Asal Sayı Bul (Prime Number Finder)

Bu JavaScript dosyası, asal sayıları bulmak için basit bir algoritma içerir.

## Açıklama

`asalSayiBul.js` dosyası, 2'den başlayarak maksimum değere kadar olan sayıları iterasyonla kontrol eder ve asal olanları `asalDizi` dizisine ekler.

### Algoritma

- Her sayı için 2'den kendisine kadar olan bölenler kontrol edilir
- Eğer bir sayının sadece kendisine eşit olan tek bir böleni varsa, o sayı asaldır
- Bulunan asal sayılar `asalDizi` dizisine kaydedilir

## Kullanım

```javascript
// Dosyayı Node.js ile çalıştırın
node asalSayiBul.js
```

## Notlar

- Maksimum değer `Math.pow(2, 53) - 1` olarak ayarlanmıştır (JavaScript'in güvenli tamsayı limiti)
- Bu algoritma eğitim amaçlıdır ve büyük sayılar için performans sorunları olabilir

## Yazar

SEMiH (Mayıs 2017)
