# svelte-app

```
npm install
npm run build
npm run dev
```

app should be running at
[http://localhost:5000/](http://localhost:5000/)  

## Serving over HTTPS:

I use the following for simple static files;  
[serve-https](https://www.npmjs.com/package/serve-https)  
```
# v2.x
npm install --global serve-https@2.x
```

If building on windows, I download OpenSSL link libs from here.  
[LinkLibs](https://indy.fulgan.com/SSL/LinkLibs/)

I used the following version;
```
OpenSSL v1.0.2m                          Precompiled Link Libraries for Win64
```
which I copied to;
```
C:\OpenSSL-Win64\lib
```

```
cd ./public
serve-https
```
Your website should now be statically served from;  
[https://localhost.daplie.me/](https://localhost.daplie.me/)
