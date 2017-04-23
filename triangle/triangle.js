var triangle = {
    isEquilateral : function(a,b,c) {
    	    if(a!=b) return false ; 
    	    if(b!=c) return false ;
    	    if(a<=0) return false ;
    		return true ;
    },
    isIsosceles: function (a, b, c) {
        //if (a + b < c && a + c < b && b + c < a && Math.abs(a - b) < c && Math.abs(a - c) < b && Math.abs(b - c) < a)
            if (a + b < c) return false;
            if (a != b && a != c && b != c) return false;
            if (a <= 0) return false;
            return true;
        
    },
    isScalene:function(a,b,c){
        //if (a + b < c && a + c < b && b + c < a && Math.abs(a - b) < c && Math.abs(a - c) < b && Math.abs(b - c) < a)
            if (a != b || a != c || b != c) return true;
            return false;
    }
};

