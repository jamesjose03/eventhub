<template>
    <div>
        <div class="container">
        <h1>Login</h1>
        <p>Welcome back! Login here to register for events or to host them!</p>
        <form>
        <div class="form-group">
            <input type="email" class="form-control e-login-fields" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <input type="password" class="form-control e-login-fields" id="exampleInputPassword1" placeholder="Password">
        </div>
  
        <button type="submit" class="btn btn-primary e-btn">Submit</button>
</form>
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
</style>