**Ortamın Kurulması**

1 - node_modules indir.
    cmd --> npm install 

2 - Bundles
    cmd --> npm run build (package.json --> script --> build)

3 - Serverın çalıştırılması
    cmd (2) --> npm run start

--------------------------------------------------------------------------
--------------------------------------------------------------------------

**JSON Server Kullanımı**

1 - NPM package ile RestApi kurulması. (Local starage yerine rest api kullanacağız.)

    - https://github.com/typicode/json-server

    - NPM ile JSON Server package global olarak kurma...

        cmd --> npm install -g json-server

2 - Kurulan Serverı Çalıştırma

     cmd --> json-server --watch db.json (--watch json-server değiştikçe bunu takip edecek.)

3 - fake-api adında yeni klasör oluştur.

4 - Porojede kullanılacak olan json dosyasını fake-api klasörüne ekle. (employee.json).

5 - db.json dosyasının kurulması 

        cmd (3) --> json-server --watch fake-api/employee.json (sürekili çalışır halde olması için farklı pencerede çalıştırıyoruz.)

        output:
        cmd -->     Home
                    http://localhost:3000  (serverımız 3000 portunda şuan çalışıyor.)


