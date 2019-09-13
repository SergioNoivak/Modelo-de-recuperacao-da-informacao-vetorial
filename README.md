# Modelo-de-recuperacao-da-informacao-vetorial
Uma implementação do Modelo de recuperacao da informacao vetorial, para a disciplina Recuperação da Informação do Instituto Federal Goaino, campus Rio Verde.<br>
O Modelo Vetorial em Sistemas de Recuperação da Informação, proposto inicialmente por Salton, reconhece que o uso de pesos binários (como feito no modelo Booleano) é muito limitado e propõe um arcabouço onde o casamento parcial entre uma consulta e um documento da coleção é possível.

Isso é feito através do assinalamento de pesos não binários aos termos de indexação dos documentos e consultas. Esses pesos associados aos termos são usados para calcular o grau de similaridade entre cada documento de uma coleção e a consulta de usuário. Dessa forma, o modelo vetorial leva em consideração documentos que casam com a consulta de forma parcial. Como resultado, o conjunto de respostas ordenadas é muito mais preciso do que o conjunto de respostas geradas pelo modelo booleano.


## Forma de usar 

A sintaxe da entrada : 

```javascript

let nome_dos_termos =[ "Rio" ,"Brasil" ,"Olimpíada"]

```
Você deve preencher a variável nome_dos_termos com todos os termos envolvidos na query da pesquisa. 
Após isso deve popular a matriz ```termos``` com a frequencia do termo i no documento j.

```javascript

let termos = [
    
    [0,1,0,2,1],
    
    [0,0,1,1,2],
    
    [2,0,3,0,4]
]


```

O número de linhas de ```termos``` é igual o tamanho de ```nome_dos_termos```.

## Exemplo de problema que o algoritmo é útil
Para os vetores documentos abaixo, construa uma nova representação                                   |
 vetorial através da fórmula do tf-idf. Utilizando o modelo espaço vetorial,                            |
 encontre a lista de documentos resultantes para a consulta: Rio Olimpíada

<table style="width:100%">
  <tr>
      <th>Documentos\Termos</th>
    <th>Rio</th>
    <th>Brasil</th>
    <th>Olimpíada</th>
  </tr>
  <tr>
      <td>d1</td>
      <td>0</td> 
      <td>0</td> 
      <td>2</td>
  </tr>
  <tr>
    
<td>d2</td> <td>1</td> <td>0</td> <td>0</td>

</tr>
<tr>
    <td>d3</td> <td>0</td> <td>1</td> <td>3</td>

</tr>
<tr>
<td>d4</td> <td>2</td> <td>1</td> <td>0</td>

</tr>
<tr>
<td>d5</td> <td>1</td> <td>2</td> <td>4</td>

</tr>
</table>

## Exemplo de saída

A saída contém os pesos dos respectivos termos em cada um dos documentos: 

```
Termo:  Rio
d 1 _ Rio  =  0
d 2 _ Rio  =  0.09691001300805642
d 3 _ Rio  =  0
d 4 _ Rio  =  0.09691001300805642
d 5 _ Rio  =  0.024227503252014105
Termo:  Brasil
d 1 _ Brasil  =  0
d 2 _ Brasil  =  0
d 3 _ Brasil  =  0.03230333766935214
d 4 _ Brasil  =  0.04845500650402821
d 5 _ Brasil  =  0.04845500650402821
Termo:  Olimpíada
d 1 _ Olimpíada  =  -0.255272505103306
d 2 _ Olimpíada  =  0
d 3 _ Olimpíada  =  -0.255272505103306
d 4 _ Olimpíada  =  0
d 5 _ Olimpíada  =  -0.255272505103306

```
