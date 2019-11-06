<template>
    <div class= "e-login-page">
        <div class=" card container">
        <h1 class="e-lhead">Login</h1>
        <p>Welcome back! Login here to register for events or to host them!</p>
        <form>
        <div class="form-group">
            <input type="email" v-model="email" class="e-login-fields" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
         
        </div>
        <div class="form-group">
            <input type="password" class="e-login-fields" id="exampleInputPassword1" placeholder="Password">
        </div>
  
        <button type="submit" class="btn btn-primary e-btn-1">Login</button>
</form>
<br>
<p>Forgot password? <a href="#">Click Here</a></p>
<p>Have not yet registered? <a href="">Sign Up</a></p>
    </div>
    </div>
</template>

<style>
    
    .e-login-fields{
        align-content: center;
        align-items: center;
        width: 25vw;
        display: inline-block;
         border: 0;
        outline: 0;
        background: transparent;
        border-bottom: 1px solid black;       
    }
    .container{
        background-color: white;
        margin-top: 25vw;
        border-radius: 40px;
        box-shadow: black;
        height: 25vw;
        width: 40vw;
    }
    .e-login-page{
        background-color: #d4418e;
        background-image: linear-gradient(315deg, #d4418e 0%, #0652c5 74%);
        position: fixed;
        margin-top: -14vw;
        height: 100vw;
        width: 100vw;
    }
    .e-lhead{
        margin-top: 4vw;
    }
    .e-btn-1{
  border: none;
  font-family: 'Roboto', sans-serif;
  background-color: #d896ff !important;
  border-radius: 40px;
  width: 128px;
  text-decoration: none;
    }
    .e-btn-1:hover{
        background-color: #efbbff !important;
    }
</style>