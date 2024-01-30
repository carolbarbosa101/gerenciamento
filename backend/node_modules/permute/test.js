/*
 * Copyright (c) 2013, Ben Noordhuis <info@bnoordhuis.nl>
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

var permute = require('./index');
var assert = require('assert');

function snailsort(seq)
{
  while (permute(seq));
}

(function()
{
  var seq = '9876543210'.split('');
  snailsort(seq);
  assert.equal(seq.join(''), '0123456789');
})();

(function()
{
  var seq = 'TEST'.split('');
  assert.equal(permute(seq), true);
  assert.equal(seq.join(''), 'TETS');
  assert.equal(permute(seq), true);
  assert.equal(seq.join(''), 'TSET');
  assert.equal(permute(seq), true);
  assert.equal(seq.join(''), 'TSTE');
  assert.equal(permute(seq), true);
  assert.equal(seq.join(''), 'TTES');
  assert.equal(permute(seq), true);
  assert.equal(seq.join(''), 'TTSE');
  assert.equal(permute(seq), false);
})();
