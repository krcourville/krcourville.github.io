$(function(){
    var disqus_div = $("#disqus_thread");
    if (disqus_div.size() > 0 ) {
        var ds_loaded = false,
            top = disqus_div.offset().top, // WHERE TO START LOADING
            disqus_data = disqus_div.data(),
            check = function(){
                if ( !ds_loaded && $(window).scrollTop() + $(window).height() > top ) {
                    ds_loaded = true;
                    for (var key in disqus_data) {
                        if (key.substr(0,6) == 'disqus') {
                            window['disqus_' + key.replace('disqus','').toLowerCase()] = disqus_data[key];
                        }
                    }
 
                    var dsq = document.createElement('script'); 
                    dsq.type = 'text/javascript';
                    dsq.async = true;
                    dsq.src = 'http://' + window.disqus_shortname + '.disqus.com/embed.js';
                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                }
            };
 
        $(window).scroll(check);
        check();
    }
});