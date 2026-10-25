// 설치형 앱 조건용 서비스워커 — 저장(캐시)은 하지 않고 늘 인터넷에서 새로 받음
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function () {});
