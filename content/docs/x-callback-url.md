+++
date = "2017-04-10T16:41:34+01:00"
draft = false
weight = 90
description = "Versatile and refined messages, ideal for daily use"
title = "X Callback Urls in Tappr Payments"
bref = "Integrate payments into your app super quickly. No need to integrate complicated SDK's or multistep API's. Simply summon our app with the payment pre-populated and initiated and we will let you know you've been payed!"
toc = true
js = ["copy"]
+++

<style>
:root {
    --param1-color: #2A5280;
    --param2-color: #3F8273;
    --param-code-font-family: "Lucida Console", Monaco, monospace;
}

h1 {
    font-family: var(--param-code-font-family);
    color: #004;
}

.focus-text {
    color: #448;
}

.subtle-text {
    color: #aad;
}

.callback {
    background-color: #eee;
    margin: 0 auto;
    font-family: var(--param-code-font-family);
}

.copyToClipboard {
    display: inline-block;
    float: right;
}

.params {
    margin-left: 20px;
}

.param-row {
    display: flex;
    justify-content: space-between;
}

.param-description {
    font-family: sans-serif;
    width: 50%;
}

input {
    border: none;
    border-bottom: 1px solid var(--param1-color);
    width: auto;
    height: 28px;
    display: inline-block;
    font-family: var(--param-code-font-family);
    outline: 0;
    background-color: #eee;
    border-radius: 0;
}

.param1 {
    color: var(--param1-color);
}

.param2 {
    color: var(--param2-color);
}
</style>


<div class="message focus" data-component="message">
    <a href="https://www.icloud.com/shortcuts/f1aa44b759324ab7a38ed8386535496a">Get the Shortcut</a>
    <span class="close small"></span>
</div>

The Tappr app includes the ability for other apps to call to it to handle payments. When done, the Tappr app will enter the foreground and when finished callback to your app in the manner described by the [X Callback Url Standard](http://x-callback-url.com). In short, by providing callbacks (`x-success`, `x-error`, and `x-cancel`) when launching our app, we can callback to your app when the work you request is finished.

---


# Authorize
<div class="callback callback-authorize">
<div>
<div class="url">
<span class="subtle-text">tappr://</span><span class="focus-text">x-callback-url/authorize</span>
</div>
</div>
<br>
<div class="params">

<div class="param-row">
<div class="param-value">

<span>?</span><!--
--><span class="param1">appname</span><!--
--><span>=</span><!--
--><input class="authorize-appname" type="text" value="Shortcuts"></input>

</div>
<div class="param-description">
<p>The path to the folder in which you want to create the document.</p>
</div>
</div>

</div>
</div>
<button class="copyToClipboard" onclick="copyCallbackToClipboard('authorize')">Copy to Clipboard</button>
<br>

# Payment
<div class="callback callback-payment">
<div>
<div>
<div class="url">
<span class="subtle-text">tappr://</span><!--
--><span class="focus-text">x-callback-url/payment</span>
</div>
</div>
</div>
<br>
<div class="params">

<div class="param-row">
<div class="param-value">

<span>?</span><!--
--><span class="param1">auth</span><!--
--><span>=</span><!--
--><input class="payment-auth" type="text" value=""></input>

</div>
<div class="param-description">
<p>The authorization key provided by the call to Authorize</p>
</div>
</div>

<div class="param-row">
<div class="param-value">

<span>&amp;</span><!--
--><span class="param2">amount</span><!--
--><span>=</span><!--
--><input class="payment-amount" type="number" value="100"></input>

</div>
<div class="param-description">
<p>The amount to begin the payment with represented in minor units. eg. 100 = $1.00</p>
</div>
</div>

</div>
</div>
<button class="copyToClipboard" onclick="copyCallbackToClipboard('payment')">Copy to Clipboard</button>


