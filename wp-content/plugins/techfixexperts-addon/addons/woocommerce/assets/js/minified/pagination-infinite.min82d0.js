!function(){var c=parseInt(astra.shop_infinite_total)||"",d=parseInt(astra.shop_infinite_count)||"",e=astra.shop_pagination||"",l=!0,t=astra.shop_infinite_scroll_event||"",p=astra.shopRevealEffectEnable||"",u=document.querySelector(".ast-shop-pagination-infinite .ast-loader");if(astShopLoadMore=document.querySelector(".ast-shop-load-more"),typeof e&&"infinite"==e){if(("undefined"==typeof wp||!(void 0!==wp.customize))&&typeof t)switch(t){case"click":astShopLoadMore&&astShopLoadMore.addEventListener("click",function(e){if(e.preventDefault(),"undefined"!=d&&""!=d&&"undefined"!=c&&""!=c){if(c<d)return!1;o(d),d++}});break;case"scroll":window.addEventListener("scroll",function(){var e,t=document.querySelector(".product:last-child");t&&(t=t.getBoundingClientRect(),e=window.innerHeight+window.scrollY>=document.body.offsetHeight,t=t.bottom<=window.innerHeight,e)&&t&&d<c&&l&&(o(d),d++,l=!1)})}function o(a){astShopLoadMore&&astShopLoadMore.classList.remove("active");var i=document.querySelector("a.next.page-numbers"),r=i.getAttribute("href"),s=(u.style.display="block",new XMLHttpRequest);s.open("GET",r,!0),s.send(),s.onload=function(){var e=s.response,e=(new DOMParser).parseFromString(e,"text/html"),t=(e.querySelector("#main")||e).querySelectorAll("li.product"),o=document.querySelector(".ast-woocommerce-container ul.products");o=o||document.querySelector(".elementor-widget-wc-archive-products ul.products"),u.style.display="none",astShopLoadMore&&astShopLoadMore.classList.add("active");for(var n=0;n<t.length;n++)o.append(t[n]);astra.grid_layout;e=astra.shop_no_more_post_message||"";c<d?document.querySelector(".ast-shop-pagination-infinite").innerHTML='<span class="ast-shop-load-more no-more active" style="display: inline-block;">'+e+"</span>":(e=r.replace(/\/page\/[0-9]+/,"/page/"+(a+1)),i.setAttribute("href",e)),l=!0,document.dispatchEvent(new CustomEvent("astraInfinitePaginationLoaded",{detail:{}})),p&&fadin(".ast-fade-up",{delay:200})}}}}();