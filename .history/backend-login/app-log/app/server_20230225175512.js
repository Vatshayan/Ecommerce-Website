var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var links = [
        { href: 'http://recruit.framgia.vn/', text: 'Framgia Việt Nam Tuyển Dụng' },
        { href: 'https://www.facebook.com/FramgiaVietnam/', text: 'Framgia Việt Nam Facebook' },
        { href: 'https://viblo.asia/', text: 'Viblo by Framgia' },
        { href: '/', text: 'Text Link 1' },
        { href: '/', text: 'Text Link 2' },
        { href: '/', text: 'Text Link 3' },
        { href: '/', text: 'Text Link 4' },
    ];
    var headline = 'Framgia Viet Nam';
    var tagline = "IT là lĩnh vực công bình và không giới hạn, nơi mỗi cá nhân được chia sẻ cơ hội và nhìn nhận thông qua nỗ lực thực sự. Tận dụng những lợi thế của IT mang lại, chúng tôi không ngừng hoàn thiện, trở thành nền tảng cho sự phát triển dịch vụ toàn cầu.";
    res.render('index', { 
        links: links,
        headline: headline,
        tagline: tagline,
    });
});

module.exports = router;
