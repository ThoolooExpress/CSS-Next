---
layout: page
Title: Admin
permalink: /admin
---
<div id="login-container">
    <!--The Username and Password are; username, and password-->
    <form style="align-items: start!important;" id="login-form" method="POST" action="https://Discord-Bot.danbgil.repl.co/reset-password">
        <h1>Settings</h1>
        <h3>Reset Password</h3>
        <div class="form__group field login-input">
            <input name="password" id="LOGIN_PASS" type="password" class="form__field" id="password" placeholder="Password"><label class="form__label" for="LOGIN_PASS">Password</label>
        </div>
        <div class="form__group field">
            <input type="submit" class="btn" value="Reset Password">
        </div>
    </form>
</div>
<script defer>
    const urlParams = new URLSearchParams(window.location.search);
    let errors = urlParams.getAll('err')
    if (errors.length > 0) { 
        document.querySelector("#login-error").innerHTML = atob(errors[0]) 
        }
</script>