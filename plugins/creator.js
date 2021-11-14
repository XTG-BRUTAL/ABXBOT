function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '919101765679', 'ARNAB/BRUTAL🐲', m)
  this.sendContact(m.chat, '919101765679', 'ARNAB/BRUTAL🐲', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
