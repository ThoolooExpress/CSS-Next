---
layout: page
Title: Login
permalink: /login/
---
<div id="login-container">
    <!--The Username and Password are; username, and password-->
    <form id="login-form" method="POST" action="http://challenge.fordhamcss.org/challenge">
        <div id="login-form-header">
            <h1>Try to Login to the Portal</h1>
            <img src="/assets/img/login.png">
            <h3 id="login-error" style="color:red;"></h3>
        </div>
        <div class="form__group field login-input">
            <input name="username" id="LOGIN_USER" type="text" class="form__field" id="username" placeholder="Username"><label class="form__label" for="LOGIN_USER">Username</label>
        </div>
        <div class="form__group field login-input">
            <input name="password" id="LOGIN_PASS" type="password" class="form__field" id="password" placeholder="Password"><label class="form__label" for="LOGIN_PASS">Password</label>
        </div>
        <div class="form__group field">
            <input type="submit" class="btn" value="submit">
        </div>
    </form>
</div>
<iframe src="http://challenge.fordhamcss.org/create-cookie" style="opacity: 0;"></iframe>
<script defer>
    const urlParams = new URLSearchParams(window.location.search);
    let errors = urlParams.getAll('err')
    if (errors.length > 0) { 
        document.querySelector("#login-error").innerHTML = atob(errors[0]) 
        }
</script>