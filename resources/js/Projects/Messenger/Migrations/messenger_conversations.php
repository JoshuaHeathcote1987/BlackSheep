<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

Schema::create('messenger_conversations', function (Blueprint $table) {
    $table->id();
    $table->foreignId('sender_id');
    $table->foreignId('receiver_id');
    $table->timestamps();
});
