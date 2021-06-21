/*
AddressFix module
© 2021 Dark Tornado, All rights reserved.
CCL BY-NC 4.0
*/

module.exports = {
    fix: (loc) => {
        return loc
            /* 구글이 일 안해서 옛날지명 나옴 */
            .replace(/여주군/g, "여주시")
            .replace(/세종, 연기군 특별자치시,/g, "세종특별자치시")
            .replace(/연기군 조치원읍/g, "세종특별자치시 조치원읍")

            /* 아니 이건 좀;; */
            .replace(/리앙쿠르 암초/g, "독도")
            .replace(/일본해 \(동해로도 알려져 있음\)/g, "동해")

            /* 대한민국 헌법상 북한은 국가가 아님 */
            .replace(/조선민주주의인민공화국/g, "북한");
    }
};
