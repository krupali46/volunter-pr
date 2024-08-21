<div class=" form-container mt-5 d-flex justify-content-center m-auto">
    <form action="/update/<%= singleRec.id %>" method="POST" class="form d-flex justify-content-center">

    <div class="form-group">
        <div class="d-flex">
            <div class="col-4 pe-2">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstName" name="firstName" value="<%= singleRec.firstName %>">
            </div>

            <div class="col-4 pe-2">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastName" name="lastName" value="<%= singleRec.lastName %>">
            </div>
            <div class="col-4">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email"  value="<%= singleRec.email %>">
            </div>
        </div>
    </div>

    <div class="form-group">
        <div class="d-flex">
            <div class="col-4 pe-2">
                <label for="age" class="form-label">Age</label>
                <input type="number" class="form-control" id="age" name="age" value="<%= singleRec.age %>">
            </div>
            <div class="col-4 pe-2">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="number" class="form-control" id="phone" name="phone" value="<%= singleRec.phone %>">
            </div>
            <div class="col-4 pe-2">
                <label for="gender" class="select-color">Gender</label>
                <select class="form-select" id="gender" name="gender">
                    <option value="">Select...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
        </div>
    </div>

    <div class="form-group">
        <div class="d-flex"> 
            <div class="col-4 pe-2">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" name="address" value="<%= singleRec.address %>">
            </div>
            <div class="col-4 pe-2">
                <label for="country" class="form-label">Country</label>
                <input type="text" class="form-control" id="country" name="country"  value="<%= singleRec.country %>">
            </div>
            <div class="col-4">
                <label for="city" class="form-label">City</label>
                <input type="text" class="form-control" id="city" name="city" value="<%= singleRec.city %>">
            </div>
        </div>
    </div>

    <div class="form-group">
        <div class="d-flex">
            <div class="col-4 pe-2">
                <label for="postcode" class="form-label">Postcode</label>
                <input type="text" class="form-control" id="postcode" name="postcode" value="<%= singleRec.postcode %>">
            </div>
            <div class="col-4 pe-2">
                <label for="emergencyContactName" class="form-label">Emergency Contact Name</label>
                <input type="text" class="form-control" id="emergencyContactName" name="emergencyContactName">
            </div>
            <div class="col-4">
                <label for="emergencyContactNumber" class="form-label">Emergency Contact Number</label>
                <input type="text" class="form-control" id="emergencyContactNumber"
                    name="emergencyContactNumber">
            </div>
        </div>
    </div>

    <div class="form-group">
        <div class="d-flex">
            <div class="col-6 pe-2">
                <label for="skills" class="form-label">Skills & Qualifications</label>
                <textarea class="form-control" id="skills" name="skills" rows="4"> value="<%= singleRec.skills %>"</textarea>
            </div>
            <div class="col-6">
                <label for="whyJoin" class="form-label">Why do you want to join?</label>
                <textarea class="form-control" id="whyJoin" name="whyJoin" rows="4"></textarea>
            </div>
        </div>
    </div>

                <button type="submit"class="form-submit-btn m-auto col-3">Update</button>
                
</form>

</div>