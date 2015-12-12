

app.controller('controller', function($scope) {
    $scope.itens = [
            {id:1, produto: 'Leite', quantidade: 2, comprado: false},
            {id:2, produto: 'Cerveja', quantidade: 12, comprado: false}
        ];
    
    
    $scope.teste =function(a){
        
        alert(a.produto);
    }
});