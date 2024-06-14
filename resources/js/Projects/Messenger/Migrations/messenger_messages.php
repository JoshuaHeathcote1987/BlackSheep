<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

Schema::create('messenger_messages', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id');
    $table->foreignId('conversation_id');
    $table->text('content');
    $table->timestamps();
});
