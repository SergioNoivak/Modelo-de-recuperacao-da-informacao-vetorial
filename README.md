# Modelo-de-recuperacao-da-informacao-vetorial
Uma implementação do Modelo de recuperacao da informacao vetorial, para a disciplina Recuperação da Informação do Instituto Federal Goaino, campus Rio Verde.


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
    
    [2,0,3,0,3]
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
 Rio Brasil Olimpíada
