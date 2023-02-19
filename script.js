let kisiSayisiElemani = document.querySelector("#kisiSayisi")
let kisiListesiElemanı = document.querySelector("#kisiListesi")


fetch("http://api.open-notify.org/astros.json")
.then( sonuc => sonuc.json() )
.then( veri => {
    console.log(veri)
    let kisiSayisi = veri.number
    let kisiArray = veri.people

    kisiSayisiElemani.innerHTML = kisiSayisi

    kisiListesiElemanı.innerHTML = "" //içindeki spinner loading etiketlerini temizle

    kisiArray.forEach(eleman => {
        let adSoyad = eleman.name

        let yeniLiElemani = document.createElement("li")
        yeniLiElemani.classList.add("list-group-item")
        yeniLiElemani.textContent = adSoyad
        kisiListesiElemanı.append(yeniLiElemani)
        
    });
    
} )