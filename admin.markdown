---
layout: page
Title: Admin
permalink: /admin
---
<h1>Logged In As: admin</h1>
<div id="login-container">
    <form style="align-items: start!important;" id="login-form" method="POST" action="https://challenge.fordhamcss.org/reset-password">
        <h1>Settings</h1>
        <h3>Reset Password</h3>
        <div class="form__group field login-input">
            <input name="password" id="LOGIN_PASS" type="password" class="form__field" id="password" placeholder="Password"><label class="form__label" for="LOGIN_PASS">Password</label>
        </div>
        <div class="form__group field">
            <input type="submit" class="btn" value="Reset Password">
        </div>
        <iframe  onerror="iframe.style.display='none'" id="settings" src="https://challenge.fordhamcss.org/admin" frameborder="0"></iframe>
    </form>
</div>
<script defer>
    const urlParams = new URLSearchParams(window.location.search);
    let errors = urlParams.getAll('err')
    if (errors.length > 0) { 
        document.querySelector("#login-error").innerHTML = atob(errors[0]) 
    }
    let iframe = document.querySelector('iframe')
    iframe.addEventListener('load', ()=> {
        console.log(iframe.contentWindow)
    })
    window.addEventListener('message', (e)=> {
        if (e.data === "closeme") {
            iframe.remove()
        }
    })
</script>
<!--This totally has nothing to do with anything
[sum( [int(j) for j in str(int(val)*(((i+1)%2)+1))] ) for i, val in enumerate(str(x)[::-1])]
-->