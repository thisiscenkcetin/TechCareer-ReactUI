# TechCareer-ReactUI

# 📦 NPM ve YARN Karşılaştırması (Ödev 2)

Bu doküman, JavaScript dünyasının en popüler iki paket yöneticisi olan **NPM** ve **YARN** arasındaki temel farkları, çalışma mantıklarını ve kurulum detaylarını açıklar.

---

## 1. Kaynak ve Kurulum
* **NPM (Node Package Manager):** Node.js ile birlikte varsayılan olarak gelir. Node.js'i bilgisayarınıza kurduğunuzda NPM de otomatik olarak kurulur; ekstra bir kurulum gerektirmez.
* **YARN (Yet Another Resource Negotiator):** Meta (Facebook) mühendisleri tarafından geliştirilmiştir. Kullanabilmek için bilgisayarınıza sonradan harici olarak yüklemeniz gerekir.

## 2. Hız ve Performans
* **NPM:** Paketleri geleneksel olarak **sırayla (serial)** indirir. Bu durum, özellikle eski sürümlerde kurulum sürecinin yavaş olmasına neden oluyordu (Not: Son sürümlerde önemli iyileştirmeler yapılmıştır).
* **YARN:** Paketleri **paralel (aynı anda)** indirir. Bu mimari sayesinde genellikle NPM'den daha hızlıdır. Ayrıca önbellek (cache) mekanizmasını daha verimli kullanarak, daha önce indirilen paketleri tekrar internetten çekmez.

## 3. Dosya Yapısı ve Versiyon Takibi
İki yönetici arasındaki en belirgin fark, paket versiyonlarını kilitledikleri dosya isimleridir:
* **NPM:** Proje bağımlılıklarını ve versiyonlarını `package-lock.json` dosyasında tutar.
* **YARN:** Bu bilgileri `yarn.lock` dosyasında tutar.

---

### ⚡ Özet

Her iki araç da projedeki `scripts` kısmında tanımlı komutları (örn: `start`) çalıştırmak için kullanılır, ancak temel farklar şunlardır:

> **NPM**, Node.js ile hazır gelir ve `package-lock.json` kullanır.
>
> **YARN** ise Meta tarafından geliştirilmiştir, paketleri paralel indirdiği için performans avantajı sunar ve `yarn.lock` dosyasını kullanır.

---

### 🛠 Küçük Bir Komut Karşılaştırması

| İşlem | NPM Komutu | YARN Komutu |
| :--- | :--- | :--- |
| **Paket Yükleme** | `npm install` | `yarn` |
| **Yeni Paket Ekleme** | `npm install [paket]` | `yarn add [paket]` |
| **Projeyi Başlatma** | `npm run start` | `yarn start` |

---

# ⚙️ Compiler (Derleyici) vs Interpreter (Yorumlayıcı)

Yazılım dünyasında kodun makine diline nasıl çevrildiğini anlamak için kullanılan iki temel yöntem vardır: **Compiler** ve **Interpreter**.

---

## 🧠 Basit Benzetme (Analoji)

Konuyu daha iyi anlamak için şu örneği düşünebilirsiniz:

> **Compiler (Derleyici):** Bir kitabın tamamını İngilizceden Türkçeye çevirip basmak gibidir. Kitap bir kere çevrilir, sonra isteyen herkes o Türkçe kitabı alıp hızlıca okur.
>
> **Interpreter (Yorumlayıcı):** Bir tercümanla canlı konuşmak gibidir. Sen İngilizce bir cümle söylersin, tercüman o an Türkçeye çevirir. Sonra diğer cümleye geçersiniz.

---

## 1. Compiler (Derleyici)
* **Çalışma Mantığı:** Kodun **tamamını tek seferde** tarar ve hepsini makine diline çevirir.
* **Çıktı:** İşlem sonunda bilgisayarın doğrudan anlayabileceği, çalıştırılabilir bağımsız bir dosya oluşturur (örneğin `.exe` dosyası).
* **Hata Yakalama:** Kodun tamamını taradığı için tüm hataları en başta (programı çalıştırmadan önce) listeler. Hata varsa çıktı dosyası oluşmaz.
* **Hız:** Çeviri işlemi (derleme) başta zaman alır ancak oluşan program, her seferinde çeviriye ihtiyaç duymadığı için **çok hızlı çalışır**.

## 2. Interpreter (Yorumlayıcı)
* **Çalışma Mantığı:** Kodu **satır satır** okur ve o an çalıştırır.
* **Çıktı:** Ayrı bir dosya (`.exe` gibi) oluşturmaz. Kaynak kodu her çalıştırdığınızda çeviri işlemini tekrar yapar.
* **Hata Yakalama:** İlk hatayı gördüğü yerde programı durdurur ve çalışmayı keser. *(Örnek: React projesinde bir satırda hata yapınca tüm sayfanın patlaması ve beyaz ekran vermesi gibi).*
* **Hız:** Satır satır çeviri yaparak ilerlediği için Compiler ile üretilen programlara göre genellikle daha yavaştır.

---

### ⚡ Hızlı Karşılaştırma Tablosu

| Özellik | Compiler (Derleyici) | Interpreter (Yorumlayıcı) |
| :--- | :--- | :--- |
| **İşleme Şekli** | Bütün kodu tek seferde çevirir. | Satır satır okur ve çalıştırır. |
| **Çıktı** | Çalıştırılabilir dosya (.exe) verir. | Dosya üretmez, anlık çalışır. |
| **Hata Tespiti** | Çalışmadan önce tüm hataları bulur. | Hata olan satıra gelince durur. |
| **Performans** | Daha hızlı çalışır. | Genellikle daha yavaştır. |
| **Örnek Diller** | C, C++, Go | JavaScript, Python, PHP |

---

