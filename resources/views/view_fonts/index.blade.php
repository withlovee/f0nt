@extends('app')

@section('content')
<div class="container">
	<div id="app"></div>
	<div id="url" class="hidex">{{ action('ViewFontController@index') }}</div>
</div>
@endsection

@section('js-components')
<script type="text/jsx;harmony=true" src="{{ asset('js/components/Font.js') }}"></script>
<script type="text/jsx;harmony=true" src="{{ asset('js/components/FontStyles.js') }}"></script>
<script type="text/jsx;harmony=true" src="{{ asset('js/components/WebFontModal.js') }}"></script>
<script type="text/jsx;harmony=true" src="{{ asset('js/components/DescriptionModal.js') }}"></script>
<script type="text/jsx;harmony=true" src="{{ asset('js/components/FontList.js') }}"></script>
<script type="text/jsx;harmony=true" src="{{ asset('js/components/FontCategory.js') }}"></script>
<script type="text/jsx;harmony=true" src="{{ asset('js/components/FontApp.js') }}"></script>
@endsection