/* */

Ext.define('DemoApp.controller.loginController', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
            'SignContainer',
            'LoginContainer',
            'UserPanel',
            'MyPanel'
        ],

        control: {
            "button#pressLOGIN": {
                tap: 'onButtonTap'
            },
            "button#pressSUBMIT": {
                tap: 'onButtonTap2'
            },
            "button#pressSIGNUP": {
                tap: 'onButtonTap3'
            }
        }
    },
    
    //Press Login Button in the Login container
    onButtonTap: function(button, e, eOpts) {
        var email = Ext.getCmp('txtEmail').getValue(),
            password = Ext.getCmp('txtPasswd').getValue();

         
        Ext.Ajax.request({
             url: 'http://127.0.0.1:3000/check',
             method: 'GET',

             type:'jsonp',
             useDefaultXhrHeader: false,

             params:
             {
                 email : email,
                 password: password
             },
             callback: this.registerStatusCallback,

            success: function(response, opts){
                Ext.Msg.alert('LOGIN STATUS', 'Success', Ext.emptyFn);
                Ext.Viewport.add(
                   {   xtype: 'vitalsform'  }
                );
                Ext.Viewport.setActiveItem(
                   {   xtype: 'vitalsform'  }
                );

            },
            failure: function(response, opts){
                 Ext.Msg.alert('LOGIN STATUS','Failed', Ext.emptyFn);
            },
            scope:this

        });//AJAX

        
    },//onButtonTap

    //press Enter Vitals in the vitalsForm
    onButtonTap2: function(button, e, eOpts) {
        Ext.Viewport.add(
                    {
                        xtype: 'thankyoupanel'
                    }
                    );
                Ext.Viewport.setActiveItem(
                {
                    xtype: 'thankyoupanel'
                });
    },

    onButtonTap3: function(button, e, eOpts) {
        
        var name = Ext.getCmp('txtFName').getValue(),
            lname = Ext.getCmp('txtLName').getValue(),
            bday = Ext.getCmp('txtBirthday').getValue(),
            gender = Ext.getCmp('intGender').getValue(),
            email = Ext.getCmp('txtEmail').getValue(),
            hospID = Ext.getCmp('txtHospID').getValue(),
            passwd = Ext.getCmp('txtPasswd').getValue(),
            passwd2 = Ext.getCmp('txtRePasswd').getValue();

        if (passwd != passwd2){
            Ext.Msg.alert('ALERT', 'Passwords donot match', Ext.emptyFn);
        }
        else {
            var loginrecord = Ext.ModelManager.getModel('DemoApp.model.login');
            var record = new loginrecord({  FName: name, LName: lname  });
            errs = record.validate();
            var msg = '';    
            if (!errs.isValid()) {
                    errs.each(function (err) {
                    msg += err.getMessage() + '<br/>';
                });
                Ext.Msg.alert('ERROR', msg);
            } else {
                Ext.Msg.alert('SUCCESS', 'Looks like the model is valid');
                record.save();
            } // if
            
            
        //var xhr = new XMLHttpRequest();

        //xhr.open('POST', 'http://127.0.0.1:3000/registers' );
        //params
        //xhr.send(name);

    

        Ext.Ajax.request({
            url: 'http://127.0.0.1:3000/registers.json',
            method: 'POST',

            type:'jsonp',
            useDefaultXhrHeader: false,

            params:
            {
                name : name,
                lname: lname,
                bday: bday,
                gender: gender,
                hospID: hospID,
                email: email,
                passwd: passwd

            },
            callback: this.registerStatusCallback,

            success: function(response, opts){
                Ext.Msg.alert('REGISTRATION STATUS', 'Success', Ext.emptyFn);
                Ext.Viewport.add(
                   {   xtype: 'logincontainer'  }
                );
                Ext.Viewport.setActiveItem(
                   {   xtype: 'logincontainer'  }
                );

            },
            failure: function(response, opts){
                 Ext.Msg.alert('REGISTRATION STATUS','Failed', Ext.emptyFn);
            },
            scope:this

        });//AJAX

    }
    }
});