let realEstate = []
let option

while (option !== '3') {
  option = prompt(`Quantidade de imóveis cadastrados: ${imoveis.length}\n1. Salvar um novo imóvel\n2. Listar imóveis salvos\n3. Sair\nEscolha uma opção:`)

  switch (option) {
    case '1':
      const name = prompt('Nome do proprietário:')
      const quarters = prompt('Quantidade de quartos:')
      const bathrooms = prompt('Quantidade de banheiros:')
      const garage = confirm('Possui garagem? (OK para Sim / Cancelar para Não)')
      if (confirm('Deseja salvar este imóvel?')) {
        imoveis.push({nome, quartos, banheiros, garagem})
        alert('Imóvel salvo com sucesso.')
      }
      break

    case '2':
      imoveis.length ? imoveis.forEach((property, i) => alert(`Imóvel ${i + 1}:\nProprietário: ${property.nome}\nQuartos: ${property.quartos}\nBanheiros: ${property.banheiros}
        \nGaragem: ${property.garagem ? 'Sim' : 'Não'}`)) : alert('Nenhum imóvel cadastrado.')
      break

      }}
