<template>
    <div>
        <h1>Add Event</h1>
        <p>Fill this form to get your event registered.</p>
        <div class="addev-form">
            <form>
                <input type="text" name ="Event Name" id="addev-name" placeholder="Event Name" />
                <input type="text" name = "Date" id="addev-date" placeholder="Date" />
                <input type="text" name = "Time" id="addev-time" placeholder="Time" />
                <input type="text" name = "Deadline" id="addev-deadline" placeholder="Deadline" />
                <input type="text" name = "Limit" id="addev-limit" placeholder="Expected audience count" />
                <input type="text" name="tags" data-role ="tagsinput" placeholder="Tags" />
                <button type="submit" class="addev-btn">Submit</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.addev-form {
    width: 45vw;
    margin-left: 28vw;
    background-color: #fff;
}
form>input{
    background-color: #fff;
}
.addev-btn {
  border: none;
  font-family: "Roboto", sans-serif;
  background-color: #d896ff !important;
  border-radius: 40px;
  width: 128px;
  text-decoration: none;
  position: fixed;
  z-index: 100;
  margin-top: 5vw;
  margin-left: -4vw;
}

.addev-btn:hover {
  background-color: #efbbff !important;
}
</style>
