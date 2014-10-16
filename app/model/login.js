Ext.define('DemoApp.model.login', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            { name: 'FName',  type: 'string'  },
            { allowNull: false,   name: 'LName',  type: 'string'  },
            { allowNull: false,   name: 'HospID', type: 'string'  },
            { allowNull: false,   name: 'Email',  type: 'string'  },
            { allowNull: false,   name: 'Passwd',  type: 'string' },
            { allowNull: false,   dateFormat: 'mm/dd/yyyy',  name: 'Birthday',   type: 'date'  },
            { allowNull: false,   name: 'Gender',  type: 'int'  }
        ],//fields
        proxy:{
            type: 'localstorage',  id: 'SenchaLogin'
        }, //proxy
        validations: [
            {   field: 'FName', type: 'presence', message: 'First Name is required'},
            {   type: 'email', field: 'emailID', message: 'Email is invalid!!!'    },
            {   type: 'length', field: 'FName',   max: 30,   min: 1  }
        ]//validations
    }//config
});//define